import * as React from 'react';
export type IconName =
  | "AgentIconsIconChatAgentProperty1"
  | "AgentIconsIconChatAgentProperty12"
  | "AgentIconsIconChatAgentProperty13"
  | "AgentIconsIconEmailAgentProperty1"
  | "AgentIconsIconEmailAgentProperty12"
  | "AgentIconsIconEmailAgentProperty13"
  | "AgentIconsIconEmailAgentProperty14"
  | "AgentIconsIconFacebookAgentProperty1"
  | "AgentIconsIconFacebookAgentProperty12"
  | "AgentIconsIconFacebookAgentProperty13"
  | "AgentIconsIconInstagramAgentProperty1"
  | "AgentIconsIconInstagramAgentProperty12"
  | "AgentIconsIconInstagramAgentProperty13"
  | "AgentIconsIconPhoneAgentProperty1"
  | "AgentIconsIconPhoneAgentProperty12"
  | "AgentIconsIconPhoneAgentProperty13"
  | "AgentIconsIconSMSAgentProperty1"
  | "AgentIconsIconSMSAgentProperty12"
  | "AgentIconsIconSMSAgentProperty13"
  | "AgentIconsIconSMSAgentProperty14"
  | "AgentIconsIconXAgentProperty1"
  | "AgentIconsIconXAgentProperty12"
  | "AgentIconsIconXAgentProperty13"
  | "AgentIconsIconXAgentProperty14"
  | "ChatAgent"
  | "EmailAgentProperty1Default"
  | "EmailAgentProperty1Inbound"
  | "EmailAgentProperty1Outbound"
  | "PhoneAgentProperty1Icon"
  | "PhoneAgentProperty1Inbound"
  | "PhoneAgentProperty1Outbound"
  | "SMSAgentProperty1Default"
  | "SMSAgentProperty1Inbound"
  | "SMSAgentProperty1Notification"
  | "SMSAgentProperty1Outbound";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
