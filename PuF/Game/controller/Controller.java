package controller;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
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
import javafx.event.ActionEvent;


public class Controller implements Initializable {

  @FXML
  private Text output;
  @FXML
  private Circle circle;
  @FXML
  private AnchorPane scene;
  @FXML
  private Rectangle collision;
  //not my own code start
    private BooleanProperty wPressed = new SimpleBooleanProperty();
    private BooleanProperty aPressed = new SimpleBooleanProperty();
    private BooleanProperty sPressed = new SimpleBooleanProperty();
    private BooleanProperty dPressed = new SimpleBooleanProperty();

    private BooleanBinding keyPressed = wPressed.or(aPressed).or(sPressed).or(dPressed);

    AnimationTimer collisionTimer = new AnimationTimer() {
      @Override
      public void handle(long timestamp) {
        checkCollision(circle, collision);
      }
    };
    AnimationTimer timer = new AnimationTimer() {
        @Override
      public void handle(long timestamp) {
          
        

            if(wPressed.get()) {
          circle.setTranslateY(circle.getTranslateY() - 2);
          System.out.println("wPressed");
            }

            if(sPressed.get()){
           circle.setTranslateY(circle.getTranslateY() + 2);
                System.out.println("sPressed");
            }

            if(aPressed.get()){
          circle.setTranslateX(circle.getTranslateX() - 2);
                System.out.println("aPressed");
            }

            if(dPressed.get()){
           circle.setTranslateX(circle.getTranslateX() + 2);
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

//not my own code end

/*   public void movement() {
    scene.setOnKeyPressed(e -> {
      switch (e.getCode()) {
        case DOWN:
          circle.setTranslateY(circle.getTranslateY() + 10);
          break;
        case UP:
          circle.setTranslateY(circle.getTranslateY() - 10);
          break;
        case LEFT:
          circle.setTranslateX(circle.getTranslateX() - 10);
          System.out.println("test");
          break;
        case RIGHT:
          circle.setTranslateX(circle.getTranslateX() + 10);
          break;
      }
    });
  }

  @Override
  public void initialize(URL url, ResourceBundle resourceBundle) {
    movement();
  }*/

  public void checkCollision(Circle circle, Rectangle collision) {
    if (circle.getBoundsInParent().intersects(collision.getBoundsInParent())) {
      output.setText("collision!");
      System.out.println("collision!");
    }
  }
}
