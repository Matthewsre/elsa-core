import { Secret } from "../secret.model";

export const OAuth2: Secret = {
  category: "Http",
  customAttributes: {},
  description: "OAuth2 credentials",
  displayName: "OAuth2 credentials",
  inputProperties: [
    {
        disableWorkflowProviderSelection: false,
        isBrowsable: true,
        isReadOnly: false,
        label: "Authorization URL",
        name: "AuthorizationUrl",
        order: 0,
        supportedSyntaxes: ["Literal"],
        type: "System.String",
        uiHint: "single-line",
      },
      {
        disableWorkflowProviderSelection: false,
        isBrowsable: true,
        isReadOnly: false,
        label: "Access Token URL",
        name: "AccessTokenUrl",
        order: 1,
        supportedSyntaxes: ["Literal"],
        type: "System.String",
        uiHint: "single-line",
      },
      {
        disableWorkflowProviderSelection: false,
        isBrowsable: true,
        isReadOnly: false,
        label: "Client ID",
        name: "ClientId",
        order: 2,
        supportedSyntaxes: ["Literal"],
        type: "System.String",
        uiHint: "single-line",
      },
      {
        disableWorkflowProviderSelection: false,
        isBrowsable: true,
        isReadOnly: false,
        label: "Client Secret",
        name: "ClientSecret",
        order: 3,
        supportedSyntaxes: ["Literal"],
        type: "System.String",
        uiHint: "single-line",
      },
      {
        disableWorkflowProviderSelection: false,
        isBrowsable: true,
        isReadOnly: false,
        label: "Scope",
        name: "Scope",
        order: 4,
        supportedSyntaxes: ["Literal"],
        type: "System.String",
        uiHint: "single-line",
      }
  ],
  type: "OAuth2"
}
