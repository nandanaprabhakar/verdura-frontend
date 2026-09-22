import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { addFavoritesAPI } from '../services/allApIs';
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Favorites({item, token, productType}) {
    const navigate = useNavigate();
    const handleFav = async () => {
        const reqHeader = {
             Authorization: `Bearer ${token}`
        }
        try{
            const reqBody = {
                productId: item._id,
                productName: item.name,
                price: item?.price?.current,
                image: item.images[0],
                productType
            }
            const response = await addFavoritesAPI(reqBody,reqHeader);
            if(response.status==200){
            console.log(response);
            
            navigate('/profile')
            }
            else{
                // alert(response.response.data);
                 toast.warn(`${response.response.data}!`, {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                      });
                console.log(response.response);
                
            }
        }
        catch(err){
            console.log(err);         
        }
    }
  return (
    <div className='text-end'>
        <FavoriteIcon onClick={handleFav} sx={{  }}/>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
        
                transition={Bounce}
              />
    </div>
  )
}

export default Favorites