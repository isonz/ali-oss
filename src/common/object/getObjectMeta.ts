import { objectName } from '../utils/objectName';
import { objectRequestParams } from '../utils/objectRequestParams';

/**
 * getObjectMeta
 * @param {String} name - object name
 * @param {Object} options
 * @param {{res}}
 */

export async function getObjectMeta(this: any, name: string, options: any = {}) {
  name = objectName(name);
  options.subres = Object.assign({ objectMeta: '' }, options.subres);
  if (options.versionId) {
    options.subres.versionId = options.versionId;
  }
  const params = objectRequestParams('HEAD', name, this.options.bucket, options);
  params.successStatuses = [200];
  const result = await this.request(params);
  return {
    status: result.status,
    res: result.res
  };
};
