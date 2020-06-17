import { append } from './append';
import { calculatePostSignature } from './calculatePostSignature';
import { copy } from './copy';
import { deleteObject } from './delete';
import { deleteMulti } from './deleteMulti';
import { deleteObjectTagging } from './deleteObjectTagging';
import { generateObjectUrl } from './generateObjectUrl';
import { get } from './get';
import { getACL } from './getACL';
import { getAsyncFetch } from './getAsyncFetch';
import { getBucketVersions } from './getBucketVersions';
import { getObjectMeta } from './getObjectMeta';
import { getObjectTagging } from './getObjectTagging';
import { getObjectUrl } from './getObjectUrl';
import { getSymlink } from './getSymlink';
import { head } from './head';
import { list } from './list';
import { postAsyncFetch } from './postAsyncFetch';
import { putACL } from './putACL';
import { putMeta } from './putMeta';
import { putObjectTagging } from './putObjectTagging';
import { putSymlink } from './putSymlink';
import { restore } from './restore';
import { signatureUrl } from './signatureUrl';
declare const _default: {
    append: typeof append;
    calculatePostSignature: typeof calculatePostSignature;
    copy: typeof copy;
    delete: typeof deleteObject;
    deleteObject: typeof deleteObject;
    deleteMulti: typeof deleteMulti;
    deleteObjectTagging: typeof deleteObjectTagging;
    generateObjectUrl: typeof generateObjectUrl;
    get: typeof get;
    getACL: typeof getACL;
    getAsyncFetch: typeof getAsyncFetch;
    getBucketVersions: typeof getBucketVersions;
    listObjectVersions: typeof getBucketVersions;
    getObjectMeta: typeof getObjectMeta;
    getObjectTagging: typeof getObjectTagging;
    getObjectUrl: typeof getObjectUrl;
    getSymlink: typeof getSymlink;
    head: typeof head;
    list: typeof list;
    postAsyncFetch: typeof postAsyncFetch;
    putACL: typeof putACL;
    putMeta: typeof putMeta;
    putObjectTagging: typeof putObjectTagging;
    putSymlink: typeof putSymlink;
    restore: typeof restore;
    signatureUrl: typeof signatureUrl;
};
export default _default;
