import React from 'react';
import {Link} from 'react-router-dom'
import {FaGoogle , FaFacebook} from 'react-icons/fa'

const Register = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[rgb(255,255,255)] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-10 font-bold text-center'>
                        به ecommerce خوش امدید.
                    </h2>
                    {/* <p className='text-sm mb-3 font-medium'> لطفا ثبت نام کنید</p> */}
                    <form action="">
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="userName">نام کاربری</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" name="userName" id="" placeholder='نام کاربری خور را وارد کنید ...'/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">ایمیل</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="text" name="email" id="" placeholder='ایمیل خور را وارد کنید ...'/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">رمز عبور</label>
                            <input className='px-3 py-2 outline-non border border-slate-700 bg-transparent rounded-md' type="text" name="password" id="" placeholder='رمز عبور خود را وارد کنید ...'/>

                        </div>
                        <div className='flex items-center w-full gap-3 mb-3'>
                            <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' type="checkbox" name="checkbox" id="" />
                            <label htmlFor="checkbox">با شرایط موافقم.</label>
                        </div>
                        <div className='bg-violet-400 w-full text-center hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 '>ثبت نام</div>
                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>حساب کاربری دارید؟
                                <Link className='font-bold ' to='/login' >
                                   وارد شوید
                                </Link>
                        </p>
                        </div>

                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-400 hover:shadow-orange-800/50 hover:shadow-lg justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaGoogle/></span>
                            </div>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-400 hover:shadow-blue-700/50 hover:shadow-lg justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaFacebook/></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;