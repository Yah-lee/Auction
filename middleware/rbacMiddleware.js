// const User = require("../models/user.models");
// const Permissions = require("../config/permissions.json");

// exports.checkPermission = (requiredPermission) => {
//   return async (req, res, next) => {
//     try {
//       if (!req.user || !req.user.user_id) {
//         console.error("req.user is not populated or user_id is missing");
//         return res.status(403).json({ error: "Access denied" });
//       }

//       console.log("Checking permissions for user_id:", req.user.user_id);

//       const user = await User.findOne({ where: { user_id: req.user.user_id } });

//       if (!user) {
//         console.error("No user found with user_id:", req.user.user_id);
//         return res.status(403).json({ error: "Access denied" });
//       }

//       const userRole = user.Role;
//       console.log("User role:", userRole);

//       const rolePermissions = Permissions[userRole] || [];

//       console.log("Role permissions:", rolePermissions);
//       console.log("Required permission:", requiredPermission);

//       if (rolePermissions.includes(requiredPermission)) {
//         console.log("Permission granted for user_id:", req.user.user_id);
//         return next();
//       } else {
//         console.error("Permission denied for user_id:", req.user.user_id);
//         return res.status(403).json({ error: "Access denied" });
//       }
//     } catch (err) {
//       console.error("Error during permission check:", err.message);
//       console.error("Error stack trace:", err.stack);
//       return res.status(500).json({ error: "Server error" });
//     }
//   };
// };
