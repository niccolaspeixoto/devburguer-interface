import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components";
import { Cart, CheckOut, CompletePayment, EditProducts, Home, Login, Menu, NewProduct, Orders, Products, Register } from "../containers/";
import {UserLayout} from '../layouts/UserLayout/index'
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<UserLayout />}> 
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/complete-payment" element={<CompletePayment />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />}/>
                <Route path="/admin/novo-produto" element={<NewProduct />}/>
                <Route path="/admin/editar-produto" element={<EditProducts />}/>
                <Route path="/admin/produtos" element={<Products />}/>
            </Route>

            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    )
}
