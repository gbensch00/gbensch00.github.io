package view;
import java.io.IOException;

import javafx.application.*;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
public class Main extends Application {

   @Override
   public void start(Stage primaryStage) throws IOException {
     Parent root = FXMLLoader.load(getClass().getResource("ui.fxml"));
    
     primaryStage.setTitle("Hello World!");
     primaryStage.setScene(new Scene(root));
     primaryStage.show();
   }
  

   public static void main(String[] args) {
     launch(args);
  }
}