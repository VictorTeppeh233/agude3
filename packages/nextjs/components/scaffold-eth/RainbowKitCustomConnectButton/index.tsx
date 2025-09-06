"use client";

// @refresh reset
import { Balance } from "../Balance";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { RevealBurnerPKModal } from "./RevealBurnerPKModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;

        // ENS resolution for current network (Sepolia, Mainnet, etc.)
        const { data: ensName, isLoading: isEnsNameLoading, error: ensNameError } = useEnsName({
          address: account?.address as Address,
          chainId: chain?.id, // Use current network for ENS resolution
          query: {
            enabled: Boolean(account?.address && chain?.id),
          },
        });

        const { data: ensAvatar, isLoading: isEnsAvatarLoading, error: ensAvatarError } = useEnsAvatar({
          name: ensName ? normalize(ensName) : undefined,
          chainId: chain?.id, // Use current network for ENS resolution
          query: {
            enabled: Boolean(ensName && chain?.id),
          },
        });

        // Debug logging
        if (account?.address && chain) {
          console.log('Wallet Connection Debug:', {
            address: account.address,
            ensName,
            ensAvatar,
            isEnsNameLoading,
            isEnsAvatarLoading,
            ensNameError,
            ensAvatarError,
            chainId: chain.id,
            chainName: chain.name
          });
        }

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="min-h-0 h-auto" />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  {chain.unsupported || chain.id !== targetNetwork.id ? (
                    <WrongNetworkDropdown />
                  ) : (
                    <>
                      <AddressInfoDropdown
                        address={account.address as Address}
                        displayName={ensName || account.displayName}
                        ensAvatar={ensAvatar || account.ensAvatar}
                        blockExplorerAddressLink={blockExplorerAddressLink}
                      />
                      <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                      <RevealBurnerPKModal />
                    </>
                  )}
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
