import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import MainLayout from '../layouts/MainLayout';

function HomePage () {
    return (
        <MainLayout>
            <div className='bg-light p-5 mt-4 rounded-3'>
                <h1>Welcome To The simple POS for small business</h1>
                <p>Labore tempor ipsum duis ea exercitation laboris laborum mollit exercitation.</p>
                <p>If you have an issue, call 443-444-xxx anytimes</p>
                <Link to="/pos" className="btn btn-primary">Click here to sell products</Link>
            </div>
        </MainLayout>
   );
}


export default HomePage;