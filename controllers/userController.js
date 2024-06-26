const { getUserList } = require("../actions/userAction")

const userList = async (req,res) => {
  let userListData = await getUserList()
  return res.status(200).json({
    error: null,
    data: userListData
  })
}

module.exports= { userList }