export const deleteProduct = (id) =>
  fetch(`http://localhost:3600/cart/${id}`, {
    method: "DELETE",
  });
