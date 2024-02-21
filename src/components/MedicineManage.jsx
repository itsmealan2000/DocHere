import React,
{
  useState
} from "react";
import {
  addMedicineApi,
  removeMedicineApi,
  changeStockApi,
} from "../Services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MedicineManage() {
  const [medicineData, setMedicineData] = useState({
    medicinename: "",
    Price: "",
    stock: "",
  });
  //add medicine
  const addMedicine = async (e) => {
    e.preventDefault();
    console.log(medicineData);
    const { medicinename, Price, stock } = medicineData;
    if (!medicinename || !Price || !stock) {
      alert("Please fill all the fields");
    } else {
      try {
        const result = await addMedicineApi(medicineData);
        console.log(result);
        if (result.status === 200) {
          setMedicineData({ medicinename: "", Price: "", stock: "" });
          toast.success(`${result.data.medicinename} has been added Successfully`);
        } else {
          alert("Medicine already exists");
        }
      } catch (err) {
        console.error(err);
        alert(`Something went wrong ${err.message || err}`);
      }
    }
  };
  //change stock value
  const changeStock = async (e) => {
    e.preventDefault();
    console.log(medicineData);
    const { medicinename, stock } = medicineData;
    if (!medicinename || !stock) {
      alert("Please fill all the fields");
    } else {
      try {
        const result = await changeStockApi(medicineData);
        console.log(result);
        if (result.status === 200) {
          setMedicineData({ medicinename: "", stock: "" });
          toast.success(`${result.data.medicinename} stock has been changed Successfully`);
        } else {
          toast.error("Medicine does not exist");
        }
      } catch (err) {
        console.error(err);
        alert(`Something went wrong ${err.message || err}`);
      }
    }
  };

  //remove medicine
  const removeMedicine = async (e) => {
    e.preventDefault();
    console.log(medicineData);
    const { medicinename } = medicineData;
    if (!medicinename) {
      alert("Please fill all the fields");
    } else {
      try {
        const result = await removeMedicineApi(medicineData);
        console.log(result);
        if (result.status === 200) {
          setMedicineData({ medicinename: "" });
          toast.success(`${result.data.medicinename} has been removed Successfully`);
        } else {
          toast.error("Medicine does not exist");
        }
      } catch (err) {
        console.error(err);
        alert(`Something went wrong ${err.message || err}`);
      }
    }
  };

  return (
    <>
      <div className="main rounded">
        <div className="m-3 p-5">
          <form action="" className="w-50 ms-auto me-auto">
            <h1>ADD MEDICINES FOR PHARMACY</h1>
            {/* add medicines */}
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={(e) => setMedicineData({ ...medicineData, medicinename: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label for="price">Price:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                required
                onChange={(e) => setMedicineData({ ...medicineData, Price: e.target.value })}
              />
            </div>
              {/* in stock and no stock radiobutton*/}
              <div className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  id="In Stock"
                  name="stock"
                  onChange={(e) => setMedicineData({ ...medicineData, stock: e.target.value })}
                  value="In_stock"
                />
                <label className="form-check-label" for="In Stock">
                  In Stock
                </label>
                <br />
                <input
                  type="radio"
                  className="form-check-input"
                  id="Out Of Stock"
                  name="stock"
                  onChange={(e) => setMedicineData({ ...medicineData, stock: e.target.value })}
                  value="Out_of_stock"
                />
                <label className="form-check-label" for="Out Of Stock">
                  No Stock
                </label>
              </div>
            <button type="submit" className="btn greenbtn mt-2"  onClick={addMedicine}>
              Add
            </button>
            <hr />
            <h1>Change Stock of Existing Medicine</h1>
            {/* changeStock */}
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={(e) => setMedicineData({ ...medicineData, medicinename: e.target.value })}
              />
              {/* in stock and no stock radiobutton*/}
              <div className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  id="In Stock"
                  name="stock"
                  onChange={(e) => setMedicineData({ ...medicineData, stock: e.target.value })}
                  value="In_stock"
                />
                <label className="form-check-label" for="In Stock">
                  In Stock
                </label>
                <br />
                <input
                  type="radio"
                  className="form-check-input"
                  id="Out Of Stock"
                  name="stock"
                  onChange={(e) => setMedicineData({ ...medicineData, stock: e.target.value })}
                  value="Out_of_stock"
                />
                <label className="form-check-label" for="Out Of Stock">
                  No Stock
                </label>
              </div>
            </div>
            <button type="submit" className="btn greenbtn mt-2"  onClick={changeStock}>
              Change Stock
            </button>

            <h1>Remove medicine</h1>
            {/* remove  */}
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={(e) => setMedicineData({ ...medicineData, medicinename: e.target.value })}
              />
            </div>
            <button type="submit" className="btn greenbtn mt-2"  onClick={removeMedicine}>
              Remove
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default MedicineManage;
