import React, { Fragment } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import './style.css';
import { card } from './Nodes';
import data from './data';

// function renderFromData() {
//     for (const item in data[0]) {
//         return <div>{JSON.stringify(item)}</div>;
//     }
// }

function recurseRender(oldArr, len = oldArr.length, newArr = []) {
    console.log('recursing');
    if (len <= 0) {
        console.log('len = 0');
        return null;
    } else if (oldArr.children === []) {
        console.log('children null');
        return null;
    } else {
        const renderNodes = (nodesArray) => {
            return (
                <TreeNode
                    label={card({
                        name: nodesArray.name,
                        email: nodesArray.email,
                        count: nodesArray.children.length || 0,
                    })}
                >
                    {nodesArray.children !== [] &&
                        recurseRender(nodesArray.children)}
                </TreeNode>
            );
        };

        const [item, ...theRest] = oldArr;
        console.log('item', item);
        console.log('the rest', theRest);
        console.log('newArr', newArr);
        // const interimArray = [...newArr, recurseRender(item, item.length)];
        // theRest.map((key) => (
        //     <Fragment>
        //         <TreeNode
        //             id={key.id}
        //             label={card({
        //                 name: key.name,
        //                 email: key.email,
        //                 count: key.children.length || 0,
        //             })}
        //         >
        //             {key.children && recurseRender(key.children)}
        //         </TreeNode>
        //     </Fragment>
        // ));
        renderNodes(item);
        recurseRender(theRest);
        // return recurseRender(theRest);

        // newArr = oldArr.children;
        // console.log(newArr);
        // oldArr.map((key) => {
        //     console.log('mapping', key);
        //     return (
        //         <TreeNode
        //             id={key.id}
        //             label={card({
        //                 name: key.name,
        //                 email: key.email,
        //                 count: key.children.length || 0,
        //             })}
        //         >
        //             {/* {recurseRender(newArr)} */}
        //         </TreeNode>
        //     );
        // });
    }
}

function Chart(props) {
    return (
        <div className="container">
            <Tree
                lineWidth={'3px'}
                lineColor={'green'}
                lineHeight={'60px'}
                lineBorderRadius={'0px'}
                nodePadding={'10px'}
                label={card({
                    name: data[0].name,
                    email: data[0].email,
                    count: data[0].children.length,
                })}
            >
                {/* {data[0].children.map((items) => {
                    return (
                        <TreeNode
                            id={items.id}
                            label={card({
                                name: items.name,
                                email: items.email,
                                count: items.children.length || 0,
                            })}
                        >
                            {items.children && (
                                <Fragment>
                                    {items.children.map((childItem) => (
                                        <TreeNode
                                            id={childItem.id}
                                            label={card({
                                                name: childItem.name,
                                                email: childItem.email,
                                                count:
                                                    childItem.children
                                                        ?.length || 0,
                                            })}
                                        ></TreeNode>
                                    ))}
                                </Fragment>
                            )}
                        </TreeNode>
                    );
                })} */}
                {recurseRender(data[0].children)}
            </Tree>

            {/* <Tree
                lineWidth={'3px'}
                lineColor={'green'}
                lineHeight={'60px'}
                lineBorderRadius={'0px'}
                nodePadding={'10px'}
                label={card({
                    name: 'Manoj Kumar',
                    email: 'kumar.manoj@bcg.com',
                })}
            >
                <TreeNode
                    style={{ backgroundColor: 'green' }}
                    label={card({
                        name: 'Oli Shaw',
                        email: 'oli.shaw@bcg.com',
                    })}
                >
                    <TreeNode
                        label={card({
                            name: 'Ajmina Poddar',
                            email: 'ajmina.poddar@bcg.com',
                        })}
                    ></TreeNode>
                    <TreeNode
                        label={card({
                            name: 'Stephanie Sigg',
                            email: 'stephanie.sigg@bcg.com',
                        })}
                    ></TreeNode>
                    <TreeNode
                        label={card({
                            name: 'Doris Dittmar',
                            email: 'dittmar.doris@bcg.com',
                        })}
                    ></TreeNode>
                </TreeNode>
            </Tree> */}
        </div>
    );
}

export default Chart;
