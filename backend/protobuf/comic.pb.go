// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/comic.proto

package protobuf

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type ComicID struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ComicID) Reset()         { *m = ComicID{} }
func (m *ComicID) String() string { return proto.CompactTextString(m) }
func (*ComicID) ProtoMessage()    {}
func (*ComicID) Descriptor() ([]byte, []int) {
	return fileDescriptor_832b078f7788f4e2, []int{0}
}

func (m *ComicID) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ComicID.Unmarshal(m, b)
}
func (m *ComicID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ComicID.Marshal(b, m, deterministic)
}
func (m *ComicID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ComicID.Merge(m, src)
}
func (m *ComicID) XXX_Size() int {
	return xxx_messageInfo_ComicID.Size(m)
}
func (m *ComicID) XXX_DiscardUnknown() {
	xxx_messageInfo_ComicID.DiscardUnknown(m)
}

var xxx_messageInfo_ComicID proto.InternalMessageInfo

func (m *ComicID) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type Comic struct {
	ComicID              string   `protobuf:"bytes,1,opt,name=comicID,proto3" json:"comicID,omitempty"`
	Title                string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Category             string   `protobuf:"bytes,3,opt,name=category,proto3" json:"category,omitempty"`
	ImageUrl             string   `protobuf:"bytes,4,opt,name=imageUrl,proto3" json:"imageUrl,omitempty"`
	Link                 string   `protobuf:"bytes,5,opt,name=link,proto3" json:"link,omitempty"`
	ComicUpdatedAt       string   `protobuf:"bytes,6,opt,name=comicUpdatedAt,proto3" json:"comicUpdatedAt,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Comic) Reset()         { *m = Comic{} }
func (m *Comic) String() string { return proto.CompactTextString(m) }
func (*Comic) ProtoMessage()    {}
func (*Comic) Descriptor() ([]byte, []int) {
	return fileDescriptor_832b078f7788f4e2, []int{1}
}

func (m *Comic) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Comic.Unmarshal(m, b)
}
func (m *Comic) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Comic.Marshal(b, m, deterministic)
}
func (m *Comic) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Comic.Merge(m, src)
}
func (m *Comic) XXX_Size() int {
	return xxx_messageInfo_Comic.Size(m)
}
func (m *Comic) XXX_DiscardUnknown() {
	xxx_messageInfo_Comic.DiscardUnknown(m)
}

var xxx_messageInfo_Comic proto.InternalMessageInfo

func (m *Comic) GetComicID() string {
	if m != nil {
		return m.ComicID
	}
	return ""
}

func (m *Comic) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Comic) GetCategory() string {
	if m != nil {
		return m.Category
	}
	return ""
}

func (m *Comic) GetImageUrl() string {
	if m != nil {
		return m.ImageUrl
	}
	return ""
}

func (m *Comic) GetLink() string {
	if m != nil {
		return m.Link
	}
	return ""
}

func (m *Comic) GetComicUpdatedAt() string {
	if m != nil {
		return m.ComicUpdatedAt
	}
	return ""
}

type ComicPagination struct {
	Comics               []*Comic `protobuf:"bytes,1,rep,name=comics,proto3" json:"comics,omitempty"`
	Paging               *Paging  `protobuf:"bytes,2,opt,name=paging,proto3" json:"paging,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ComicPagination) Reset()         { *m = ComicPagination{} }
func (m *ComicPagination) String() string { return proto.CompactTextString(m) }
func (*ComicPagination) ProtoMessage()    {}
func (*ComicPagination) Descriptor() ([]byte, []int) {
	return fileDescriptor_832b078f7788f4e2, []int{2}
}

func (m *ComicPagination) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ComicPagination.Unmarshal(m, b)
}
func (m *ComicPagination) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ComicPagination.Marshal(b, m, deterministic)
}
func (m *ComicPagination) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ComicPagination.Merge(m, src)
}
func (m *ComicPagination) XXX_Size() int {
	return xxx_messageInfo_ComicPagination.Size(m)
}
func (m *ComicPagination) XXX_DiscardUnknown() {
	xxx_messageInfo_ComicPagination.DiscardUnknown(m)
}

var xxx_messageInfo_ComicPagination proto.InternalMessageInfo

func (m *ComicPagination) GetComics() []*Comic {
	if m != nil {
		return m.Comics
	}
	return nil
}

func (m *ComicPagination) GetPaging() *Paging {
	if m != nil {
		return m.Paging
	}
	return nil
}

type ComicPaginationParams struct {
	CursorID             string   `protobuf:"bytes,1,opt,name=cursorID,proto3" json:"cursorID,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ComicPaginationParams) Reset()         { *m = ComicPaginationParams{} }
func (m *ComicPaginationParams) String() string { return proto.CompactTextString(m) }
func (*ComicPaginationParams) ProtoMessage()    {}
func (*ComicPaginationParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_832b078f7788f4e2, []int{3}
}

func (m *ComicPaginationParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ComicPaginationParams.Unmarshal(m, b)
}
func (m *ComicPaginationParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ComicPaginationParams.Marshal(b, m, deterministic)
}
func (m *ComicPaginationParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ComicPaginationParams.Merge(m, src)
}
func (m *ComicPaginationParams) XXX_Size() int {
	return xxx_messageInfo_ComicPaginationParams.Size(m)
}
func (m *ComicPaginationParams) XXX_DiscardUnknown() {
	xxx_messageInfo_ComicPaginationParams.DiscardUnknown(m)
}

var xxx_messageInfo_ComicPaginationParams proto.InternalMessageInfo

func (m *ComicPaginationParams) GetCursorID() string {
	if m != nil {
		return m.CursorID
	}
	return ""
}

func init() {
	proto.RegisterType((*ComicID)(nil), "ggarry9424.comic_web.ComicID")
	proto.RegisterType((*Comic)(nil), "ggarry9424.comic_web.Comic")
	proto.RegisterType((*ComicPagination)(nil), "ggarry9424.comic_web.ComicPagination")
	proto.RegisterType((*ComicPaginationParams)(nil), "ggarry9424.comic_web.ComicPaginationParams")
}

func init() { proto.RegisterFile("protobuf/comic.proto", fileDescriptor_832b078f7788f4e2) }

var fileDescriptor_832b078f7788f4e2 = []byte{
	// 398 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x52, 0xcd, 0x6a, 0xdb, 0x40,
	0x10, 0xb6, 0x94, 0x58, 0x49, 0x27, 0x21, 0x81, 0xc5, 0x0d, 0x5b, 0x25, 0x94, 0x20, 0x68, 0x09,
	0x14, 0x14, 0x90, 0x7d, 0xe9, 0xb1, 0xb6, 0x4b, 0x31, 0xed, 0xc1, 0xd8, 0xb8, 0x87, 0x5e, 0xca,
	0x4a, 0xda, 0x2e, 0x4b, 0x25, 0xad, 0x58, 0xad, 0x6a, 0x04, 0x7d, 0x82, 0xbe, 0x4a, 0x5f, 0xb2,
	0x68, 0xf4, 0x73, 0x50, 0x8d, 0xf1, 0x4d, 0xdf, 0xdf, 0x7e, 0xa3, 0x61, 0x60, 0x92, 0x6b, 0x65,
	0x54, 0x58, 0xfe, 0x78, 0x8e, 0x54, 0x2a, 0x23, 0x1f, 0x21, 0x99, 0x08, 0xc1, 0xb4, 0xae, 0xde,
	0xcf, 0x82, 0x99, 0x8f, 0xfc, 0xf7, 0x3d, 0x0f, 0xdd, 0xd7, 0x42, 0x29, 0x91, 0xf0, 0xe7, 0x3e,
	0xb2, 0xd7, 0x2c, 0xcf, 0xb9, 0x2e, 0x9a, 0x94, 0x7b, 0x3f, 0xd4, 0x79, 0x9a, 0x9b, 0xaa, 0x15,
	0xef, 0x7a, 0xb6, 0x34, 0x32, 0x91, 0x1d, 0xef, 0xbd, 0x82, 0x8b, 0x45, 0xdd, 0xb0, 0x5a, 0x92,
	0x1b, 0xb0, 0x65, 0x4c, 0xad, 0x47, 0xeb, 0xe9, 0xc5, 0xc6, 0x96, 0xb1, 0xf7, 0xd7, 0x82, 0x31,
	0x6a, 0x84, 0xc2, 0x45, 0xd4, 0x98, 0x5a, 0xb9, 0x83, 0x64, 0x02, 0x63, 0x23, 0x4d, 0xc2, 0xa9,
	0x8d, 0x7c, 0x03, 0x88, 0x0b, 0x97, 0x11, 0x33, 0x5c, 0x28, 0x5d, 0xd1, 0x33, 0x14, 0x7a, 0x5c,
	0x6b, 0x32, 0x65, 0x82, 0xef, 0x74, 0x42, 0xcf, 0x1b, 0xad, 0xc3, 0x84, 0xc0, 0x79, 0x22, 0xb3,
	0x9f, 0x74, 0x8c, 0x3c, 0x7e, 0x93, 0xb7, 0x70, 0x83, 0x65, 0xbb, 0x3c, 0x66, 0x86, 0xc7, 0x1f,
	0x0c, 0x75, 0x50, 0x1d, 0xb0, 0xde, 0x6f, 0xb8, 0xc5, 0x61, 0xd7, 0x4c, 0xc8, 0x8c, 0x19, 0xa9,
	0x32, 0x32, 0x05, 0x07, 0x4d, 0x05, 0xb5, 0x1e, 0xcf, 0x9e, 0xae, 0x82, 0x7b, 0xff, 0xd0, 0x5e,
	0x7d, 0x8c, 0x6d, 0x5a, 0x2b, 0x99, 0x81, 0x93, 0xd7, 0x4f, 0x08, 0xfc, 0xa5, 0xab, 0xe0, 0xe1,
	0x70, 0x08, 0x6b, 0xc4, 0xa6, 0xf5, 0x7a, 0x53, 0x78, 0x39, 0x68, 0x5f, 0x33, 0xcd, 0xd2, 0x02,
	0x57, 0x51, 0xea, 0x42, 0xe9, 0x7e, 0x77, 0x3d, 0x0e, 0xfe, 0xd8, 0x70, 0x8d, 0xa9, 0x2d, 0xd7,
	0xbf, 0x64, 0xc4, 0x49, 0x08, 0xf0, 0x45, 0x16, 0x66, 0xd1, 0x4c, 0xf2, 0xee, 0xc8, 0xb8, 0xc3,
	0x1e, 0xf7, 0xcd, 0x49, 0x66, 0x6f, 0x44, 0x3e, 0xc3, 0xf5, 0x27, 0xde, 0x54, 0xcc, 0xab, 0xd5,
	0x92, 0x3c, 0xf8, 0xcd, 0xd9, 0xf8, 0xdd, 0x81, 0xf8, 0x5b, 0xa3, 0x65, 0x26, 0xbe, 0xb2, 0xa4,
	0xe4, 0xee, 0xb1, 0x95, 0x79, 0x23, 0xb2, 0x82, 0xdb, 0x25, 0x4f, 0xb8, 0xe1, 0xa7, 0xbe, 0x77,
	0xf7, 0x9f, 0xfa, 0xb1, 0x3e, 0x52, 0x6f, 0x34, 0x87, 0x6f, 0x97, 0x1d, 0x17, 0x3a, 0xf8, 0x35,
	0xfd, 0x17, 0x00, 0x00, 0xff, 0xff, 0x88, 0xcb, 0x46, 0x08, 0x1e, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ComicServiceClient is the client API for ComicService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ComicServiceClient interface {
	ListComics(ctx context.Context, in *ComicPaginationParams, opts ...grpc.CallOption) (*ComicPagination, error)
	GetComicByID(ctx context.Context, in *wrappers.StringValue, opts ...grpc.CallOption) (*Comic, error)
	DeleteComicByID(ctx context.Context, in *wrappers.StringValue, opts ...grpc.CallOption) (*empty.Empty, error)
}

type comicServiceClient struct {
	cc *grpc.ClientConn
}

func NewComicServiceClient(cc *grpc.ClientConn) ComicServiceClient {
	return &comicServiceClient{cc}
}

func (c *comicServiceClient) ListComics(ctx context.Context, in *ComicPaginationParams, opts ...grpc.CallOption) (*ComicPagination, error) {
	out := new(ComicPagination)
	err := c.cc.Invoke(ctx, "/ggarry9424.comic_web.ComicService/ListComics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *comicServiceClient) GetComicByID(ctx context.Context, in *wrappers.StringValue, opts ...grpc.CallOption) (*Comic, error) {
	out := new(Comic)
	err := c.cc.Invoke(ctx, "/ggarry9424.comic_web.ComicService/GetComicByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *comicServiceClient) DeleteComicByID(ctx context.Context, in *wrappers.StringValue, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/ggarry9424.comic_web.ComicService/DeleteComicByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ComicServiceServer is the server API for ComicService service.
type ComicServiceServer interface {
	ListComics(context.Context, *ComicPaginationParams) (*ComicPagination, error)
	GetComicByID(context.Context, *wrappers.StringValue) (*Comic, error)
	DeleteComicByID(context.Context, *wrappers.StringValue) (*empty.Empty, error)
}

func RegisterComicServiceServer(s *grpc.Server, srv ComicServiceServer) {
	s.RegisterService(&_ComicService_serviceDesc, srv)
}

func _ComicService_ListComics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ComicPaginationParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ComicServiceServer).ListComics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ggarry9424.comic_web.ComicService/ListComics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ComicServiceServer).ListComics(ctx, req.(*ComicPaginationParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _ComicService_GetComicByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(wrappers.StringValue)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ComicServiceServer).GetComicByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ggarry9424.comic_web.ComicService/GetComicByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ComicServiceServer).GetComicByID(ctx, req.(*wrappers.StringValue))
	}
	return interceptor(ctx, in, info, handler)
}

func _ComicService_DeleteComicByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(wrappers.StringValue)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ComicServiceServer).DeleteComicByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ggarry9424.comic_web.ComicService/DeleteComicByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ComicServiceServer).DeleteComicByID(ctx, req.(*wrappers.StringValue))
	}
	return interceptor(ctx, in, info, handler)
}

var _ComicService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ggarry9424.comic_web.ComicService",
	HandlerType: (*ComicServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListComics",
			Handler:    _ComicService_ListComics_Handler,
		},
		{
			MethodName: "GetComicByID",
			Handler:    _ComicService_GetComicByID_Handler,
		},
		{
			MethodName: "DeleteComicByID",
			Handler:    _ComicService_DeleteComicByID_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protobuf/comic.proto",
}
