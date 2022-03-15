/**
 * Remove
 * @param template JSON object of Stack template
 */
/* eslint-disable @typescript-eslint/no-explicit-any, no-param-reassign */
export function removeAssetsElements(template: { [key: string]: any; }) {
  template.Parameters = {};
  Object.values(template.Resources).forEach((resource: any) => {
    if (resource?.Properties?.Code) {
      resource.Properties.Code = {};
    }
  });
}
/* eslint-enable @typescript-eslint/no-explicit-any, no-param-reassign */
