let text = `CREATE TABLE comm.t_sys_user_svc_bot (
	row_id uuid NOT NULL DEFAULT uuid_generate_v1(),
	client_id int4,
	user_wechat_id varchar(30),
	bot_wechat_id varchar(30),
	created_time timestamp,
	created_by varchar(32),
	updated_time timestamp,
	updated_by varchar(32),
	modification_num int4,
	"type" varchar(30),
	CONSTRAINT t_sys_user_svc_bot_pkey PRIMARY KEY (row_id)
);
`

String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }

let data = text.split("\n");

let result = {};

for (let i = 0; i< data.length; i++){
  if (!data[i]) {
    continue;
  }

  let temp = data[i].trim();
  let field = temp.split(" ")[0];
  field = field.replace(/\"/g, '');

  if (temp.indexOf('uuid') > -1) {
    if (temp.indexOf('uuid_generate_v1') > -1) {
      result[field] = {
        type: "Sequelize.UUID",
        primaryKey: true,
        defaultValue: "Sequelize.DataTypes.UUIDV4"
      }
    } else {
      result[field] = {
        type: "Sequelize.UUID"
      }
    }
  } else if (temp.indexOf('int4') > -1 || temp.indexOf('int2') > -1) {
    result[field] = {
      type: "Sequelize.INTEGER"
    }
  } else if (temp.indexOf('varchar') > -1) {
    result[field] = {
      type: "Sequelize.STRING"
    }
  } else if (temp.indexOf('date') > -1 || temp.indexOf('timestamp') > -1) {
    result[field] = {
      type: "Sequelize.DATE"
    }
  }
}

let tempresult = JSON.stringify(result);
tempresult = tempresult.replace(/\"/g, "")
console.log(tempresult);