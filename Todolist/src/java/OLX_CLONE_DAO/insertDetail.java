/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OLX_CLONE_DAO;

import OLX_CLONE_DBUTIL.DbInitializer;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 *
 * @author HP
 */
public class insertDetail{
    public static boolean insertProduct(String task)throws SQLException
    {
        Connection conn=DbInitializer.getConnection();
         PreparedStatement ps=conn.prepareStatement("insert into task values(?)");
         ps.setString(1, task);
         return ps.executeUpdate()==1;
    }
}
