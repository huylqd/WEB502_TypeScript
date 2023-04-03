import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpUser } from "../../types/user";

//type of props
interface IProps {
  onSignUp: (data: SignUpUser) => void;
}
const SignUp = (props: IProps) => {
  const { register, handleSubmit } = useForm<SignUpUser>();
  const onHanleSumit: SubmitHandler<SignUpUser> = (data: SignUpUser) => {
    props.onSignUp(data);
  };
  return (
    <div className="container my-4">
      <h3 className="py-2 text-uppercase text-center text-info">
        <i className="bi bi-person-add mr-2"></i>Đăng ký tài khoản
      </h3>
      <form className=" w-50 mx-auto" onSubmit={handleSubmit(onHanleSumit)}>
        <div className="form-group">
          <label htmlFor="name">Họ tên</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SignUp;
