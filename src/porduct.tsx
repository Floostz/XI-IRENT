import { createSignal, createResource } from "solid-js";
import  AgGridSolid  from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    if (!res.ok) throw new Error("Gagal mengambil data produk");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default function ProductCRUD() {
  const [products, { refetch }] = createResource(fetchProducts);
  const [name, setName] = createSignal("");
  const [price, setPrice] = createSignal(0);
  const [stock, setStock] = createSignal(0);
  const [editId, setEditId] = createSignal<number | null>(null);

  const handleSubmit = async () => {
    const productData = { name: name(), price: price(), stock: stock() };
    
    if (editId()) {
      await fetch(`http://localhost:5000/products/${editId()}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
    } else {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
    }
    
    refetch();
    setName("");
    setPrice(0);
    setStock(0);
    setEditId(null);
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
    refetch();
  };

  const handleEdit = (product: Product) => {
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
    setEditId(product.id);
  };

  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true },
    { headerName: "Stock", field: "stock", sortable: true, filter: true },
    {
      headerName: "Actions",
      cellRenderer: (params: any) => (
        <div>
          <button class="bg-yellow-500 text-white p-1 mx-1" onClick={() => handleEdit(params.data)}>Edit</button>
          <button class="bg-red-500 text-white p-1" onClick={() => handleDelete(params.data.id)}>Delete</button>
        </div>
      )
    }
  ];

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold">Product CRUD</h1>
      <div class="my-4">
        <input class="border p-2" placeholder="Name" value={name()} onInput={(e) => setName(e.currentTarget.value)} />
        <input class="border p-2 mx-2" type="number" placeholder="Price" value={price()} onInput={(e) => setPrice(parseFloat(e.currentTarget.value))} />
        <input class="border p-2" type="number" placeholder="Stock" value={stock()} onInput={(e) => setStock(parseInt(e.currentTarget.value))} />
        <button class="bg-blue-500 text-white p-2 ml-2" onClick={handleSubmit}>{editId() ? "Update" : "Add"}</button>
      </div>
      <div class="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
        <AgGridSolid columnDefs={columnDefs} rowData={products()} pagination={true} paginationPageSize={10} />
      </div>
    </div>
  );
}
