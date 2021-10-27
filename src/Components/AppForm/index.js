import React, { forwardRef } from "react";
import { Formik, Form } from "formik";

const AppForm = forwardRef(
    ({ initValues, onSubmit, validationSchema, children }, ref) => {
        return (
            <Formik
                initialValues={initValues}
                innerRef={ref}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnChange={false}
            >
                {(formik) => {
                    return <Form>{children}</Form>;
                }}
            </Formik>
        );
    }
);

export default AppForm;
