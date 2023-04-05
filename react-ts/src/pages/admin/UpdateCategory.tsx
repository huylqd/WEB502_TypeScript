import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { ICategory } from "../../types/category";
interface IProps {
  categories: ICategory[];
  onUpdate: (data: ICategory) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<ICategory>();

  useEffect(() => {
    setFormData(props.categories?.find((category: any) => category._id === id));
  }, [props.categories]);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      initialValues={formData}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Tên danh mục"
        rules={[
          { required: true, message: "Vui lòng nhập tên danh mục!" },
          { min: 3, message: "Vui lòng nhập tên sản phẩm nhiều hơn 3 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#1677FF" }}
        >
          Cập nhật
        </Button>
        <Button
          type="primary"
          style={{ background: "#8c8c8c", marginLeft: "5px" }}
        >
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateCategory;
