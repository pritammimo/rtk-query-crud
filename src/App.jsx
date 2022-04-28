import { BrowserRouter, Navigate, Route, Routes,Link} from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import Products from "./pages/Products";
const { Header, Content } = Layout;
function App() {

  return (
   <>
    <BrowserRouter>
    <Layout>
    <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link className="ant-btn" to="/addproduct">
            Add Product
          </Link>
        </Header>
      <Routes>
        {/* <Route path="/" element={<h1>Hello React Router</h1>} /> */}
        <Route path="/" element={<Products />}  />
        <Route path="/product/:id" element={<Product />}  />
        <Route path="/addproduct" element={<AddProduct />}  />
        <Route path="/editproduct/:id" element={<EditProduct/>}  />
      </Routes>
      </Layout>
    </BrowserRouter>
   </>
  );
}

export default App;