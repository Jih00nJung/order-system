import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from "./components/AdminLayout";
// import Dashboard from './pages/Admin/Dashboard';
import ProductList from './pages/Admin/ProductList';
import ProductEdit from './pages/Admin/ProductEdit';
import OrderList from './pages/Admin/OrderList';
import OrderDetail from './pages/Admin/OrderDetail';
import OrderCreate from './pages/Admin/OrderCreate';
import Shipments from './pages/Admin/Shipments';
import Settings from './pages/Admin/Settings';

import StoreHome from './pages/StoreHome';
import StoreDetail from './pages/StoreDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import MyPageOrders from './pages/MyPageOrders';
import UserOrderDetail from './pages/UserOrderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminLayout />}>
          {/* Admin Routes */}
          {/*<Route path="/admin" element={<Navigate to="/admin/dashboard" />} />*/}
          {/*<Route path="/admin/dashboard" element={<Dashboard />} />*/}
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/product-edit" element={<ProductEdit />} />
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/admin/order-detail" element={<OrderDetail />} />
          <Route path="/admin/order-create" element={<OrderCreate />} />
          <Route path="/admin/settings" element={<Settings />} />
          
          {/* User Routes */}
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/store" element={<StoreHome />} />
          <Route path="/store-detail" element={<StoreDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/mypage-orders" element={<MyPageOrders />} />
          <Route path="/order-detail" element={<UserOrderDetail />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
