import React, { useContext } from "react";
import { BuilderContext, useDrawer } from "react-flow-builder";
import { Form, Button, Input } from "antd";

const ConfigForm: React.FC = () => {
  const { selectedNode: node }: any = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  return (
    <div>
      <Form form={form} initialValues={node.data || { name: node.name }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
      <div className="flex justify-end items-end">
        <button
          onClick={cancel}
          className="text-xs md:text-sm mx-3  text-dark border-[1px] border-FontGray px-5 py-2 rounded-md"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="mr-3 text-xs md:text-sm text-gray-300 font-medium bg-secondary px-5 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ConfigForm;
