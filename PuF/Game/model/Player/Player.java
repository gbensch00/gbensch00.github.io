package model.Player;

public class Player {

  //Data Fields
  private String name;
  private int score;
  private int movementSpeed;

  public Player(String name) {
    this.name = name;
    score = 0;
    movementSpeed = 2;
  }

  public String getName() {
    return name;
  }

  public int getMovementSpeed() {
    return movementSpeed;
  }

  public int getScore() {
    return score;
  }
  
  public void increaseMovementSpeed(int movementSpeed) {
    movementSpeed += 2;
  }
}
