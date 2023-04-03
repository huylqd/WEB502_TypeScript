import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInUser } from "../../types/user";

//type of props
interface IProps {
  onSignIn: (data: SignInUser) => void;
}
const SignIn = (props: IProps) => {
  const { register, handleSubmit } = useForm<SignInUser>();
  const onHandleSubmit: SubmitHandler<SignInUser> = (data: SignInUser) => {
    props.onSignIn(data);
  };
  return (
    <div className="container my-4">
      <h3 className="py-2 text-uppercase text-center text-info">
        <i className="bi bi-person mr-2"></i>Đăng nhập tài khoản
      </h3>
      <form className=" w-50 mx-auto" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Địa chỉ Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
          />
          <small id="emailHelp" className="form-text text-muted">
            Chúng tôi sẽ không chia sẻ email của bạn với bất kỳ ai khác.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="checkout" />
          <label className="form-check-label" htmlFor="checkout">
            Không lưu thông tin đăng nhập
          </label>
        </div>
        <button type="submit" className="btn btn-info">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default SignIn;
