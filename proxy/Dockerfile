# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM envoyproxy/envoy:latest

ENV GRPC_SERVER_HOST=127.0.0.1
ENV GRPC_SERVER_PORT=9090

COPY ./envoy.yaml.template /etc/envoy/envoy.yaml.template
CMD cat "/etc/envoy/envoy.yaml.template" \
    | sed "s/{{ GRPC_SERVER_HOST }}/$GRPC_SERVER_HOST/g" \
    | sed "s/{{ GRPC_SERVER_PORT }}/$GRPC_SERVER_PORT/g" > /etc/envoy/envoy.yaml \
    && /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log