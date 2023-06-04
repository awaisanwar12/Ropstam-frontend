import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Button, Input, Modal, message } from "antd";


function Home() {
   
    const [cars, setCars] = useState([]);
    const [color, setColor] = useState("");
    const [model, setModel] = useState("");
    const [registration, setRegistration] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:5000/cars").then((response) => {
        setCars(response.data);
      });
    }, []);

    function getCars() {
      axios.get("http://localhost:5000/cars").then((response) => {
        setCars(response.data);
      });
    }
    const handleAddCar = () => {
      const newCar = { color, model, registration };

      axios
        .post("http://localhost:5000/cars", newCar)
        .then((response) => {
          setCars([...cars, response.data]);
          setColor("");
          setModel("");
          setRegistration("");
        })
        .then(() => getCars());
    };

    const handleDeleteCar = (_id) => {
      axios.delete(`http://localhost:5000/cars/${_id}`).then(() => {
        setCars(cars.filter((car) => car._id !== _id));
      });
      Modal.confirm({
        title: "Confirm",
        content: "Are you sure you want to delete this file?",
        okText: "Yes",
        cancelText: "No",
        onOk() {
          message.success("Deleted successfully");
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    };

    const handleUpdateCar = (car) => {
      setSelectedCar(car);
      setColor(car.color);
      console.log(car);
      setModel(car.model);
      setRegistration(car.registration);
      setIsModalOpen(true);
    };
    const okUpdate = () => {
      axios
        .put(`http://localhost:5000/cars/${selectedCar._id}`, {
          color,
          model,
          registration,
        })
        .then((response) => {
          const updatedCar = response.data;
          setCars(
            cars.filter((car) =>
              car._id === updatedCar._id ? updatedCar : car
            )
          );
          setSelectedCar("");
          setColor("");

          setModel("");
          setRegistration("");

          setIsModalOpen(false);
          message.success("Book updated successfully");
        })
        .then(getCars);
    };

    const columns = [
      {
        title: "Color",
        dataIndex: "color",
        key: "color",
        // width: "10%"
      },
      {
        title: "Model",
        dataIndex: "model",
        key: "model",
        // width: "10%"
      },
      {
        title: "Registration",
        dataIndex: "registration",
        key: "registration",
        // width: "10%"
      },
      {
        title: "Action",
        key: "action",
        width: "10%",
        render: (record) => (
          <Space>
            <Button onClick={() => handleDeleteCar(record._id)}>Delete</Button>

            <Button onClick={() => handleUpdateCar(record)}>Update</Button>
          </Space>
        ),
      },
    ];
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      if (selectedCar) {
        okUpdate();
        return;
      }
      if (color && model && registration) {
        // check if required fields are not empty

        handleAddCar(); // call the add function

        setIsModalOpen(false); // close the modal on successful submission
        message.success("Data added successfully");
      } else {
        // show error message if required fields are empty
        message.error("model and registration are required");
      }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <div >
        <h1 className="h1"> Cars</h1> 
        <div className="div">
          <Button size="small" type="primary" onClick={showModal}>
            Add Car
          </Button>
        </div>
        <Table
          className="table"
          columns={columns}
          dataSource={cars}
          pagination={{ pageSize: 3 }}
          scroll={{ y: 240 }}
          bordered
          size="small"
        />

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <label>
            Color:
            <Input
              style={{ width: "20%" }}
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <br />
          <label>
            Model:
            <Input
              style={{ width: "20%" }}
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
          <br />
          <label>
            registration:
            <Input
              style={{ width: "20%" }}
              placeholder="Registraion"
              type="text"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </label>
          <br />
        </Modal>
      </div>
    );
  };


export default Home;
