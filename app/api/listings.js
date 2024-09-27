import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint); //getting the listings from the server

//post method
//assurer que les champs ne contiennent pas des valeurs null ou undefined
//pourrait provoquer des erreurs lors de l'envoi des données au serveur
const addListings = (listing, onUploadProgress) => {
  console.log("listing", listing);

  const data = new FormData();
  data.append("title", listing.title || "");
  data.append("price", listing.price || 0);
  data.append("categoryId", listing.category?.value || 0);
  data.append("description", listing.description || "");
  const a = {
    title: listing.title,
    price: listing.price,
    categoryId: listing.category?.value,
    description: listing.description,
  };
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  console.log("dattra", data);
  return client.post(
    endpoint,
    { images: data, ...a },
    {
      onUploadProgress: (Progress) =>
        onUploadProgress(Progress.loaded / Progress.total),
    }
  );
};

export default {
  addListings,
  getListings,
};
