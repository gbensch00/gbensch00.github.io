package controller;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.AnchorPane;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.animation.AnimationTimer;
import javafx.beans.binding.BooleanBinding;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;



public class Controller implements Initializable {

  @FXML
  private Text output;
  @FXML
  private Circle circle;
  @FXML
  private AnchorPane scene;
  @FXML
  private Rectangle collisionObject;
  @FXML
  private Rectangle item1;
  
  
    private BooleanProperty wPressed = new SimpleBooleanProperty();
    private BooleanProperty aPressed = new SimpleBooleanProperty();
    private BooleanProperty sPressed = new SimpleBooleanProperty();
    private BooleanProperty dPressed = new SimpleBooleanProperty();

    private BooleanBinding keyPressed = wPressed.or(aPressed).or(sPressed).or(dPressed);

    private int movementSpeed = 2;

    
    
    AnimationTimer timer = new AnimationTimer() {
      
        @Override
      public void handle(long timestamp) {
        checkcollisionObject(circle, collisionObject);
        if (scene.getChildren().contains(item1)) {
          checkcollisionItem(circle, item1);
        }
        
            if(wPressed.get()) {
          circle.setTranslateY(circle.getTranslateY() - movementSpeed);
          System.out.println("wPressed");
            }

            if(sPressed.get()){
           circle.setTranslateY(circle.getTranslateY() + movementSpeed);
                System.out.println("sPressed");
            }

            if(aPressed.get()){
          circle.setTranslateX(circle.getTranslateX() - movementSpeed);
                System.out.println("aPressed");
            }

            if(dPressed.get()){
           circle.setTranslateX(circle.getTranslateX() + movementSpeed);
                System.out.println("dPressed");
            }
            
        }
    };

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        movementSetup();
        keyPressed.addListener(((observableValue, aBoolean, t1) -> {
            if(!aBoolean){
                timer.start();
            } else {
                timer.stop();
            }
        }));
    }

    public void movementSetup() {
      scene.setOnKeyPressed(e -> {
        if (e.getCode() == KeyCode.W) {
          wPressed.set(true);
        }
        if (e.getCode() == KeyCode.A) {
          aPressed.set(true);
        }
        if (e.getCode() == KeyCode.S) {
          sPressed.set(true);
        }
        if (e.getCode() == KeyCode.D) {
          dPressed.set(true);
        }
      });

      scene.setOnKeyReleased(e -> {
        if (e.getCode() == KeyCode.W) {
          wPressed.set(false);
        }
        if (e.getCode() == KeyCode.A) {
          aPressed.set(false);
        }
        if (e.getCode() == KeyCode.S) {
          sPressed.set(false);
        }
        if (e.getCode() == KeyCode.D) {
          dPressed.set(false);
        }
      });
    }

    //Prüft, ob der Kreis mit dem Rechteck an der Seite kollidiert
    public void checkcollisionObject(Circle circle, Rectangle collisionObject) {
      if (circle.getBoundsInParent().intersects(collisionObject.getBoundsInParent())) {
        //output.setText("collision!");
        System.out.println("collisionObject!");
      }
    }

    //Prüft, ob der Kreis mit dem kleinen Rechteck kollidiert. Wenn ja, wird das Item von der Scene entfernt und die Geschwindigkeit des Kreises wird erhöht.
  public void checkcollisionItem(Circle circle, Rectangle item1) {
    if (circle.getBoundsInParent().intersects(item1.getBoundsInParent())) {
      
      System.out.println("collisionItem!");
      movementSpeed += 2;
      output.setText("movespeed: " + movementSpeed);
      scene.getChildren().remove(item1);
    }
  }
}
