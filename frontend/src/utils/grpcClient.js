/**
 * This js file would encounter this issue https://github.com/vuejs/vue-cli/issues/2746.
 * We should fix in someday. Now we use 'sourceType: 'unambiguous' as the solution.
 */

const ComicGrpcWebPb = require('../protobuf/comic_grpc_web_pb');

const { VUE_APP_SERVER_URL } = process.env;

const client = new ComicGrpcWebPb.ComicServiceClient(VUE_APP_SERVER_URL, null, null);

export default client;
