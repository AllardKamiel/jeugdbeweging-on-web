<?php

namespace App\SOAP;

class GetLyricRequest {
  /**
   * 
   * @var int
   */
  protected $lyricId;
  /**
   * 
   * @var string
   */
  protected $lyricCheckSum;
  /**
   * GetLyricRequest constructor.
   * @param int lyricId
   * @param string lyricCheckSum
   */
  public function __construct($lyricId, $lyricCheckSum){
    $this->lyricId = $lyricId;
    $this->lyricCheckSum = $lyricCheckSum;
  }
  /**
   * 
   * @return int
   */
  public function getLyricId(){
    return $this->lyricId;
  }
  /**
   * 
   * @return string
   */
  public function getLyricChecksum(){
    return $this->lyricCheckSum;
  }
}