using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MVCSample.Models
{
    public class EmployeeModel
    {
        public List<Employees> GetEmployees()
        {
            List<Employees> lst = new List<Employees>();
            string strCon = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
            SqlConnection con = new SqlConnection(strCon);
            SqlCommand cmd = new SqlCommand("sp_EmployeeInfo", con);
            cmd.CommandType = CommandType.StoredProcedure;
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lst.Add(new Employees
                {
                    EmployeeName = dr["EmployeeName"].ToString(),
                    Email = dr["EmailID"].ToString(),
                    DepartName = dr["DepartmentName"].ToString(),
                    DateOfBirth = Convert.ToDateTime(dr["DateOfBirth"]).ToString("dd-MMM-yyyy"),
                    DateofJoining = Convert.ToDateTime(dr["DateofJoining"]).ToString("dd-MMM-yyyy")
                });
            }
            return lst;
        }
        public int PostEmployees(string employeeName, string email, string departmentName, string dateOfJoining, string dateOfBirth)
        {
            string strCon = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
            int retVal = 0;
            using (SqlConnection con = new SqlConnection(strCon))
            {
                SqlCommand cmd = new SqlCommand("sp_DepartmentProc", con);
                cmd.Parameters.Add("@EmployeeName", SqlDbType.NVarChar, 50).Value = employeeName;
                cmd.Parameters.Add("@DateOfJoining", SqlDbType.NVarChar, 50).Value = dateOfJoining;
                cmd.Parameters.Add("@DateOfBirth", SqlDbType.NVarChar, 50).Value = dateOfBirth;
                cmd.Parameters.Add("@EmailID", SqlDbType.NVarChar, 50).Value = email;
                cmd.Parameters.Add("@DepartmentName", SqlDbType.NVarChar, 50).Value = departmentName;
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                retVal = cmd.ExecuteNonQuery();
                con.Close();
            }
            return retVal;
        }
    }
}