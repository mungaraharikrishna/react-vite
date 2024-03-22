import { Avatar, Badge, Button, Space, Table, TableProps, Tag, Tooltip } from "antd";
import { useEffect, useState } from "react";
import UsersService from "../services/users.service";
import UtilsService from "../services/utils.service";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import UserModalPop from "../components/modals/users.modal";

function Users() {
  const [data, setData]: any = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const columns: TableProps<any>['columns'] = [
    {
      title: '#',
      render: (_, record) => (
        <>{data && data.indexOf(record) + 1}</>
      ),
      width: '3%',
    },
    {
      title: 'Name',
      render: (_, record, index) => (
        <div className="flex items-center gap-2">
          <Avatar style={{ backgroundColor: UtilsService.getRandomColor(index) }} size={'large'}>{UtilsService.getAcronym(record.firstName, record.lastName)}</Avatar>
          <div className="flex flex-col truncate text-ellipsis">
            <div title={record.name}>{record.name}</div>
            <small className="text-slate-400" title={record.userName}>{record.userName}</small>
          </div>
        </div>
      ),
      width: '15%'
    },
    {
      title: 'Role',
      render: (_, { rolesDto }) => (
        <>
          {rolesDto && rolesDto.map((tag: any, index: number) => {
            return (
              <Tag color={tag.name == 'Agent' ? 'gold' : tag.name == 'User' ? 'geekblue' : tag.name == 'Admin' ? 'success' : 'magenta'} className={tag.name} key={index}>
                {tag.name.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Phonenumber',
      dataIndex: 'phonenumber',
    },
    {
      title: 'Department(s)',
      render: (_, { departmentDto }) => (
        <>
          {departmentDto && departmentDto.map((department: any, index: number) => {
            return (
              <Space className="flex gap-2 mb-2" key={index + 1}>
                <Tag color="processing">{department.departmentName}</Tag>
              </Space>
            )
          })}
        </>
      ),
      width: '10%',
    },
    {
      title: 'Bussiness Unit',
      render: (_, { bussinessUnitRequestDto }) => (
        <>
          {bussinessUnitRequestDto &&
            <div>{bussinessUnitRequestDto.name}</div>
          }
        </>
      )
    },
    {
      title: 'Employee Type',
      dataIndex: 'employeeName'
    },
    {
      title: 'SuperVisor',
      dataIndex: 'superVisorFirstName'
    },
    {
      title: 'Authentication',
      dataIndex: 'authRole'
    },
    {
      title: 'Primary',
      render: (_, { isPrimary }) => (
        <>
          <Tooltip title={isPrimary ? 'Primary' : 'No Primary'}>
            {isPrimary ? <Badge status="success" /> : <Badge status="default" />}
          </Tooltip>
        </>
      )
    },
    {
      title: 'Status',
      render: (_, { status }) => (
        <>
          {status}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Edit">
            <Button type="text" size="small" shape="circle" icon={<EditOutlined />} onClick={() => openEditModal(record)} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const tableColumns = columns.map((item) => ({ ...item, ellipsis: true }));

  const openEditModal = (record?: any) => {
    console.log(record);
    setModalData(record);
    setIsModalOpen(true);
  }

  const onModalEventFn = (val: any) => {
    console.log(val)
    setIsModalOpen(false);
  }

  const getUsers = () => {
    setLoading(true);
    UsersService.getUsers().then((response: any) => {
      const res = response.data;
      if (res && res.statusCode == 200) {
        setData([...res.listUserRequestDtos]);
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="flex justify-end mb-2">
        <Button type="primary" size="large" icon={<PlusOutlined />} onClick={() => openEditModal()}>Add New</Button>
      </div>
      <Table columns={tableColumns} dataSource={data} rowKey={record => record.id} loading={loading} scroll={{ y: `55vh` }} />
      {isModalOpen && <UserModalPop isModalOpen={isModalOpen} modalData={modalData} onModalEvent={onModalEventFn} />}
    </>
  )
}

export default Users;
