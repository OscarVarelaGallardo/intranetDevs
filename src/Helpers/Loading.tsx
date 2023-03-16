import { Spin } from "antd";

export default function Loading() {
  return (
    <Spin tip="Loading" size="small" style={{width: '100%'}}>
      <div className="content" />
    </Spin>
  );
}
