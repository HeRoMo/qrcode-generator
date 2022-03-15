/**
 * Remove
 * @param template JSON object of Stack template
 */
export function removeAssetsElements(template: { [key: string]: any; }) {
  template.Parameters = {};
  Object.values(template.Resources).forEach((resource: any) => {
    if (resource?.Properties?.Code) {
      resource.Properties.Code = {};
    }
  });
}
