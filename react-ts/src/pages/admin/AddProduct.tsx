import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Upload,
} from "antd";
import type { FormInstance } from "antd/es/form";
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

//type Props
interface IProps {
  categories: ICategory[];
  onAdd: (data: IProduct) => void;
}
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddProduct = (props: any) => {
  const formRef = React.useRef<FormInstance>(null);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  // antd
  const onFinish = (values: any) => {
    props.onAdd(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  /* upload image
  const propsImg: UploadProps = {
    name: "image",
    action: "http://localhost:8080/api/products",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name}  tải lên thành công.`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} t lên thất bại.`);
      }
    },
  };
*/
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="categoryId"
        label="Danh mục"
        rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
      >
        <Select placeholder="Chọn danh mục" allowClear>
          {categories.map((category) => {
            return <Option value={category._id}>{category.name}</Option>;
          })}
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Tên sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 5, message: "Tên sản phẩm phải nhiều hơn 5 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Mô tả sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 10, message: "Mô tả sản phẩm phải nhiều hơn 10 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="price"
        label="Giá sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập giá sản phẩm" },
          {
            pattern: /^[1-9]\d*$/,
            message: "Vui lòng nhập số lớn hơn 0",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="image"
        label="Ảnh sản phẩm"
        rules={[{ required: true, message: "Dán link file ảnh" }]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item name="image" label="Ảnh sản phẩm">
        <Upload {...propsImg}>
          <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
        </Upload>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
        <Button htmlType="button" onClick={onReset} className="ml-2">
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
