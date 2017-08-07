// model for test table
module.exports = function(sequelize, DataTypes) {
  const TestTable = sequelize.define("TestTable", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
        // accepts only allows letters and spaces 
        is: /^[a-zA-Z\s]*$/,
	    	under140: (str) => {
	    		if (str.length > 140 || str.length < 1) {
	    			throw new Error('Must be between 1 and 140 characters!');
	    		}
	    	}
    	}
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // accepts only allows letters and spaces 
        is: /^[a-zA-Z\s]*$/,
        under140: (str) => {
          if (str.length > 140 || str.length < 1) {
            throw new Error('Must be between 1 and 140 characters!');
          }
        }
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        under140: (str) => {
          if (str.length > 140) {
            throw new Error('Must be under 140 characters!');
          }
        }
      }
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        // only allows integers or null values
        isInt: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // only allows emails
        isEmail: true,
        under140: (str) => {
          if (str.length > 140 || str.length < 1) {
            throw new Error('Must be between 1 and 140 characters!');
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        under140: (str) => {
          if (str.length > 140 || str.length < 1) {
            throw new Error('Must be between 1 and 140 characters!');
          }
        }
      }
    }
  });
  return TestTable;
};