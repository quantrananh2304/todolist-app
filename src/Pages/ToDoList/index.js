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
            <div
                className="col-lg-3 col-md-3 text-center"
                style={styles.container}
            >
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
                    <div className="form-group row">
                        <Field
                            type="text"
                            id="taskName"
                            name="taskName"
                            className="form-control"
                            placeholder="Add new task..."
                        />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="taskDescription">Description</label>
                    </div>

                    <div className="form-group row">
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
                                return <textarea style={{ width: "100%" }} />;
                            }}
                        </Field>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="dueDate">Due date</label>
                            <Field className="form-control">
                                {({ form, field }) => {
                                    return (
                                        <input
                                            type="date"
                                            name="dueDate"
                                            id="dueDate"
                                            style={{ width: "100%" }}
                                        />
                                    );
                                }}
                            </Field>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="priority">Priority</label>
                            <Field className="form-control">
                                {({ form }) => {
                                    return (
                                        <div>
                                            <select
                                                name="priority"
                                                id="priority"
                                                style={{
                                                    width: "100%",
                                                }}
                                            >
                                                <option value="low">low</option>
                                                <option value="normal">
                                                    normal
                                                </option>
                                                <option value="high">
                                                    high
                                                </option>
                                            </select>
                                        </div>
                                    );
                                }}
                            </Field>
                        </div>
                    </div>

                    <div className="form-group row">
                        <button type="submit" class="btn btn-success">
                            Add
                        </button>
                    </div>
                </AppForm>
            </div>
            <div className="col-lg-9 col-md-9"></div>
        </>
    );
}

export default ToDoList;
