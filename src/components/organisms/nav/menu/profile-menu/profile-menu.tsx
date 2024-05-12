import React from "react";
import { ContextMenu as KiwiContextMenu } from "kiwi-design-system";

type ProfileMenuProps = {
  options: any,
  onClose: () => void
};

export const ProfileMenu = ({ options, onClose }: ProfileMenuProps) => {
  return <KiwiContextMenu onClose={onClose} options={options} />;
};
