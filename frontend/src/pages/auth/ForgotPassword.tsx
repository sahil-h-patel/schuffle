function ForgotPassword() {

  return (
    <div className="card bg-base-100 flex-grow">
      <div className="card-body gap-3"> 
        <h2 className='text-3xl font-medium'>Forgot Password</h2>
        <div className="flex flex-col gap-1">
            {/* Email Input*/}
            <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            <input type="email" placeholder="mail@site.com" required/>
            </label>
        </div>
        <button className="btn btn-primary">
            Send Link
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword;
