import React from "react";
import { Button, Form, Modal, } from "react-bootstrap";
// import OtpInput from "react-otp-input";
import mail from "../../../assets/images/mail.svg";
import CommonInput from "../commonInput/CommonInput";
import { useFormik } from "formik";
import * as Yup from "yup";

const Forget = ({ ...props }) => {
    const { forgetshow, forgetclose, onOpen } = props;


    const forgotSchema = Yup.object().shape({
        email: Yup.string().email().required("*This Field is required").matches(
            /^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$/,
            "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed."
          ),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgotSchema,
        onSubmit: async (values) => {
            values.email = values?.email.toLowerCase()

        },
    });

    return (
        <>
            <Modal
                className="commonModal spacing"
                centered
                show={forgetshow}
                onHide={forgetclose}
                onOpen={onOpen}
            >
                <Modal.Header closeButton></Modal.Header>
                <div className="modalContent">
                    <div className="mb-5">
                        <h2 className="">Reset Your Password</h2>
                    </div>
                    <div className="signup__forn">
                        <Form onSubmit={formik.handleSubmit}>
                            <CommonInput
                                labelname="Email"
                                inputPlaceholder="ROOBA@gmail.com"
                                id="email"
                                typeinput="email"
                                inputIcon={<img src={mail} alt="" />}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                isInvalid={formik.touched.email && !!formik.errors.email}
                                error={formik.errors.email && formik.touched.email ? (
                                    <span className="error-message">{formik.errors.email}</span>
                                ) : null}
                            />
                                <Button
                                    className="w-50 centered signBtn mt-4"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Forget