"use client";

import { Checkbox, Table } from "flowbite-react";
import { Card } from "flowbite-react";

import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import Buttons from "./Buttons";

const Tasklist = () => {

 

  return (
    <Card className="max-w-4xl mb-8  max-h-screen overflow-x-auto border-l-8 border-l-teal-700">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Total Tasks
        </h5>
        <Buttons  type="Submit" name="Submit"/>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Project</Table.HeadCell>
            <Table.HeadCell>department</Table.HeadCell>
            <Table.HeadCell>Assign</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                07/10/2014
              </Table.Cell>
              <Table.Cell>Redisgn Navbar</Table.Cell>
              <Table.Cell>Designing</Table.Cell>
              <Table.Cell>kahkasha</Table.Cell>
              <Table.Cell>
              <ToggleSwitch/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Card>
  );
};

export default Tasklist;
