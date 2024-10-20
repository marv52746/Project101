import { useDispatch, useSelector } from "react-redux";
import {
  //   deleteUser,
  getUsers,
  //   registerUser,
  //   setUser,
} from "../API/user";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../slices/userListSlice";

const useUserHooks = () => {
  const dispatch = useDispatch();
  //   const [allData, setAllData] = useState();
  //   const [teamData, setTeamData] = useState();
  //   const [guestData, setGuestData] = useState();
  //   const [defaultUser, setDefaultUser] = useState();
  //   const [currentUser, setCurrentUser] = useState();
  //   const [updateTrigger, setUpdateTrigger] = useState(0);

  //   const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUsers()) // Call getUsers to dispatch the action
      .then((response) => {
        dispatch(fetchAllUsers(response));
        // const user = response.find((column) => column._id === userInfo?._id);
        // const team = response.filter(
        //   (column) => column.account_type !== "user"
        // );
        // const guest = response.filter(
        //   (column) => column.account_type === "user"
        // );
        // const defaultCustomer = response.find(
        //   (column) => column._id === "6545d9305db10f1dfca1333c"
        // );
        // setAllData(response); // Update the state with the response data
        // setTeamData(team);
        // setGuestData(guest);
        // setDefaultUser(defaultCustomer);
        // setCurrentUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
    //   }, [dispatch, updateTrigger, userInfo]);
  }, [dispatch]);

  //   const handleFormSubmitHook = (data, setAlert, setOpenModal) => {
  //     if (data._id === undefined) {
  //       return dispatch(registerUser(data))
  //         .then(() => {
  //           var alert = {
  //             severity: "success",
  //             title: "Success",
  //             message: "User created successfully!",
  //           };
  //           setOpenModal(false);
  //           setAlert(alert);
  //           setUpdateTrigger((prevTrigger) => prevTrigger + 1); // Update the trigger state
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } else {
  //       return dispatch(setUser(data._id, data))
  //         .then(() => {
  //           var alert = {
  //             severity: "success",
  //             title: "Record Updated",
  //             message: "User updated successfully!",
  //           };
  //           setOpenModal(false);
  //           setAlert(alert);
  //           setUpdateTrigger((prevTrigger) => prevTrigger + 1); // Update the trigger state
  //         })
  //         .catch((error) => {
  //           var alert = {
  //             severity: "error",
  //             title: "Error",
  //             message: error,
  //           };
  //           setOpenModal(false);
  //           setAlert(alert);
  //         });
  //     }
  //   };

  //   const removeUser = (recordID, setAlert, setOpen) => {
  //     return dispatch(deleteUser(recordID))
  //       .then(() => {
  //         var alert = {
  //           severity: "success",
  //           title: "Product Removed",
  //           message: "Product removed successfully!",
  //         };
  //         setOpen(false);
  //         setAlert(alert);
  //         setUpdateTrigger((prevTrigger) => prevTrigger + 1); // Update the trigger state
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   const hasDuplicateEmail = (email) => {
  //     return allData && allData.find((user) => user.email === email);
  //   };

  return {
    // handleFormSubmitHook,
    // removeUser,
    // allData,
    // hasDuplicateEmail,
    // teamData,
    // guestData,
    // defaultUser,
    // currentUser,
  };
};

export default useUserHooks;
