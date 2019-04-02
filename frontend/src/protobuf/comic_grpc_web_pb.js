/**
 * @fileoverview gRPC-Web generated client stub for ggarry9424.comic_web
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var protobuf_utility_pb = require('../protobuf/utility_pb.js')
const proto = {};
proto.ggarry9424 = {};
proto.ggarry9424.comic_web = require('./comic_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ggarry9424.comic_web.ComicServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ggarry9424.comic_web.ComicServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.ggarry9424.comic_web.ComicServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.ggarry9424.comic_web.ComicServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ggarry9424.comic_web.ComicPaginationParams,
 *   !proto.ggarry9424.comic_web.ComicPagination>}
 */
const methodInfo_ComicService_ListComics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ggarry9424.comic_web.ComicPagination,
  /** @param {!proto.ggarry9424.comic_web.ComicPaginationParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ggarry9424.comic_web.ComicPagination.deserializeBinary
);


/**
 * @param {!proto.ggarry9424.comic_web.ComicPaginationParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ggarry9424.comic_web.ComicPagination)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ggarry9424.comic_web.ComicPagination>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServiceClient.prototype.listComics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ggarry9424.comic_web.ComicService/ListComics',
      request,
      metadata,
      methodInfo_ComicService_ListComics,
      callback);
};


/**
 * @param {!proto.ggarry9424.comic_web.ComicPaginationParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ggarry9424.comic_web.ComicPagination>}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServicePromiseClient.prototype.listComics =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listComics(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.ggarry9424.comic_web.Comic>}
 */
const methodInfo_ComicService_GetComicByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ggarry9424.comic_web.Comic,
  /** @param {!proto.google.protobuf.StringValue} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ggarry9424.comic_web.Comic.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ggarry9424.comic_web.Comic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ggarry9424.comic_web.Comic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServiceClient.prototype.getComicByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ggarry9424.comic_web.ComicService/GetComicByID',
      request,
      metadata,
      methodInfo_ComicService_GetComicByID,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ggarry9424.comic_web.Comic>}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServicePromiseClient.prototype.getComicByID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getComicByID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ComicService_DeleteComicByID = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.google.protobuf.StringValue} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServiceClient.prototype.deleteComicByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ggarry9424.comic_web.ComicService/DeleteComicByID',
      request,
      metadata,
      methodInfo_ComicService_DeleteComicByID,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.ggarry9424.comic_web.ComicServicePromiseClient.prototype.deleteComicByID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteComicByID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.ggarry9424.comic_web;

