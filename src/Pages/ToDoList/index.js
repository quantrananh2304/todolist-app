import React from "react";
import { AppForm } from "../../Components";
import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles";

function ToDoList(props) {
    function handleSubmitForm(values) {
        return;
    }

    const validationSchema = Yup.object().shape({
        taskName: Yup.string().required("Task name is required!"),
    });

    return (
        <>
            <div className="col-lg-3" style={styles.container}>
                <h2>New Task</h2>
                <AppForm
                    initValues={{
                        taskName: "",
                        taskDescription: "",
                        taskDueDate: new Date(),
                        taskPriority: "",
                    }}
                    onSubmit={handleSubmitForm}
                    validationSchema={validationSchema}
                >
                    <div className="form-group-row" style={styles.boxContainer}>
                        <Field
                            type="text"
                            id="taskName"
                            name="taskName"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="taskDescription">Description</label>
                    </div>
                    <div className="form-group-row">
                        <Field
                            type="text"
                            id="taskDescription"
                            name="taskDescription"
                            className="form-control"
                        >
                            {({ field, form, meta }) => {
                                console.log("field", field);
                                console.log("form", form);
                                console.log("meta", meta);
                                return <textarea cols={"auto"} />;
                            }}
                        </Field>
                    </div>
                </AppForm>
            </div>
            <div className="col-lg-9" style={styles.container}></div>
        </>
    );
}

export default ToDoList;
