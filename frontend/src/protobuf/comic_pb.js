/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var protobuf_utility_pb = require('../protobuf/utility_pb.js');
goog.object.extend(proto, protobuf_utility_pb);
goog.exportSymbol('proto.ggarry9424.comic_web.Comic', null, global);
goog.exportSymbol('proto.ggarry9424.comic_web.ComicID', null, global);
goog.exportSymbol('proto.ggarry9424.comic_web.ComicPagination', null, global);
goog.exportSymbol('proto.ggarry9424.comic_web.ComicPaginationParams', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ggarry9424.comic_web.ComicID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ggarry9424.comic_web.ComicID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ggarry9424.comic_web.ComicID.displayName = 'proto.ggarry9424.comic_web.ComicID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ggarry9424.comic_web.Comic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ggarry9424.comic_web.Comic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ggarry9424.comic_web.Comic.displayName = 'proto.ggarry9424.comic_web.Comic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ggarry9424.comic_web.ComicPagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ggarry9424.comic_web.ComicPagination.repeatedFields_, null);
};
goog.inherits(proto.ggarry9424.comic_web.ComicPagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ggarry9424.comic_web.ComicPagination.displayName = 'proto.ggarry9424.comic_web.ComicPagination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ggarry9424.comic_web.ComicPaginationParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ggarry9424.comic_web.ComicPaginationParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ggarry9424.comic_web.ComicPaginationParams.displayName = 'proto.ggarry9424.comic_web.ComicPaginationParams';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ggarry9424.comic_web.ComicID.prototype.toObject = function(opt_includeInstance) {
  return proto.ggarry9424.comic_web.ComicID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ggarry9424.comic_web.ComicID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicID.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ggarry9424.comic_web.ComicID}
 */
proto.ggarry9424.comic_web.ComicID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ggarry9424.comic_web.ComicID;
  return proto.ggarry9424.comic_web.ComicID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ggarry9424.comic_web.ComicID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ggarry9424.comic_web.ComicID}
 */
proto.ggarry9424.comic_web.ComicID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ggarry9424.comic_web.ComicID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ggarry9424.comic_web.ComicID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ggarry9424.comic_web.ComicID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ggarry9424.comic_web.ComicID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.ComicID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ggarry9424.comic_web.Comic.prototype.toObject = function(opt_includeInstance) {
  return proto.ggarry9424.comic_web.Comic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ggarry9424.comic_web.Comic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.Comic.toObject = function(includeInstance, msg) {
  var obj = {
    comicid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imageurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    link: jspb.Message.getFieldWithDefault(msg, 5, ""),
    comicupdatedat: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ggarry9424.comic_web.Comic}
 */
proto.ggarry9424.comic_web.Comic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ggarry9424.comic_web.Comic;
  return proto.ggarry9424.comic_web.Comic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ggarry9424.comic_web.Comic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ggarry9424.comic_web.Comic}
 */
proto.ggarry9424.comic_web.Comic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComicid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageurl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setComicupdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ggarry9424.comic_web.Comic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ggarry9424.comic_web.Comic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ggarry9424.comic_web.Comic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.Comic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComicid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageurl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getComicupdatedat();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string comicID = 1;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getComicid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setComicid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string category = 3;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string imageUrl = 4;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getImageurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setImageurl = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string link = 5;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setLink = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string comicUpdatedAt = 6;
 * @return {string}
 */
proto.ggarry9424.comic_web.Comic.prototype.getComicupdatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.Comic.prototype.setComicupdatedat = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ggarry9424.comic_web.ComicPagination.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.toObject = function(opt_includeInstance) {
  return proto.ggarry9424.comic_web.ComicPagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ggarry9424.comic_web.ComicPagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicPagination.toObject = function(includeInstance, msg) {
  var obj = {
    comicsList: jspb.Message.toObjectList(msg.getComicsList(),
    proto.ggarry9424.comic_web.Comic.toObject, includeInstance),
    paging: (f = msg.getPaging()) && protobuf_utility_pb.Paging.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ggarry9424.comic_web.ComicPagination}
 */
proto.ggarry9424.comic_web.ComicPagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ggarry9424.comic_web.ComicPagination;
  return proto.ggarry9424.comic_web.ComicPagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ggarry9424.comic_web.ComicPagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ggarry9424.comic_web.ComicPagination}
 */
proto.ggarry9424.comic_web.ComicPagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ggarry9424.comic_web.Comic;
      reader.readMessage(value,proto.ggarry9424.comic_web.Comic.deserializeBinaryFromReader);
      msg.addComics(value);
      break;
    case 2:
      var value = new protobuf_utility_pb.Paging;
      reader.readMessage(value,protobuf_utility_pb.Paging.deserializeBinaryFromReader);
      msg.setPaging(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ggarry9424.comic_web.ComicPagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ggarry9424.comic_web.ComicPagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicPagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ggarry9424.comic_web.Comic.serializeBinaryToWriter
    );
  }
  f = message.getPaging();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      protobuf_utility_pb.Paging.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Comic comics = 1;
 * @return {!Array<!proto.ggarry9424.comic_web.Comic>}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.getComicsList = function() {
  return /** @type{!Array<!proto.ggarry9424.comic_web.Comic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ggarry9424.comic_web.Comic, 1));
};


/** @param {!Array<!proto.ggarry9424.comic_web.Comic>} value */
proto.ggarry9424.comic_web.ComicPagination.prototype.setComicsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ggarry9424.comic_web.Comic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ggarry9424.comic_web.Comic}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.addComics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ggarry9424.comic_web.Comic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.clearComicsList = function() {
  this.setComicsList([]);
};


/**
 * optional Paging paging = 2;
 * @return {?proto.ggarry9424.comic_web.Paging}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.getPaging = function() {
  return /** @type{?proto.ggarry9424.comic_web.Paging} */ (
    jspb.Message.getWrapperField(this, protobuf_utility_pb.Paging, 2));
};


/** @param {?proto.ggarry9424.comic_web.Paging|undefined} value */
proto.ggarry9424.comic_web.ComicPagination.prototype.setPaging = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.clearPaging = function() {
  this.setPaging(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ggarry9424.comic_web.ComicPagination.prototype.hasPaging = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ggarry9424.comic_web.ComicPaginationParams.prototype.toObject = function(opt_includeInstance) {
  return proto.ggarry9424.comic_web.ComicPaginationParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ggarry9424.comic_web.ComicPaginationParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicPaginationParams.toObject = function(includeInstance, msg) {
  var obj = {
    cursorid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ggarry9424.comic_web.ComicPaginationParams}
 */
proto.ggarry9424.comic_web.ComicPaginationParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ggarry9424.comic_web.ComicPaginationParams;
  return proto.ggarry9424.comic_web.ComicPaginationParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ggarry9424.comic_web.ComicPaginationParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ggarry9424.comic_web.ComicPaginationParams}
 */
proto.ggarry9424.comic_web.ComicPaginationParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ggarry9424.comic_web.ComicPaginationParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ggarry9424.comic_web.ComicPaginationParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ggarry9424.comic_web.ComicPaginationParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ggarry9424.comic_web.ComicPaginationParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCursorid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cursorID = 1;
 * @return {string}
 */
proto.ggarry9424.comic_web.ComicPaginationParams.prototype.getCursorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ggarry9424.comic_web.ComicPaginationParams.prototype.setCursorid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.ggarry9424.comic_web);
