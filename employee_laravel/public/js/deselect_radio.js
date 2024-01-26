(function($) {
  $.fn.uncheckableRadio = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cpu_notes"]').attr('disabled', true).focus();
          $('textarea[name="cpu_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cpu_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio2 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cpu_fix"]').attr('disabled', true).focus();
          $('textarea[name="cpu_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cpu_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio3 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="monitor_notes"]').attr('disabled', true).focus();
          $('textarea[name="monitor_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="monitor_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio4 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="monitor_fix"]').attr('disabled', true).focus();
          $('textarea[name="monitor_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="monitor_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio5 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="keyboard_notes"]').attr('disabled', true).focus();
          $('textarea[name="keyboard_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="keyboard_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio6 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="keyboard_fix"]').attr('disabled', true).focus();
          $('textarea[name="keyboard_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="keyboard_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio7 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="mouse_notes"]').attr('disabled', true).focus();
          $('textarea[name="mouse_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="mouse_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio8 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="mouse_fix"]').attr('disabled', true).focus();
          $('textarea[name="mouse_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="mouse_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio9 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="windows_notes"]').attr('disabled', true).focus();
          $('textarea[name="windows_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="windows_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio10 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="windows_fix"]').attr('disabled', true).focus();
          $('textarea[name="windows_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="windows_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio11 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="antivirus_notes"]').attr('disabled', true).focus();
          $('textarea[name="antivirus_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="antivirus_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio12 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="antivirus_fix"]').attr('disabled', true).focus();
          $('textarea[name="antivirus_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="antivirus_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio13 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cache_notes"]').attr('disabled', true).focus();
          $('textarea[name="cache_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cache_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio14 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cache_fix"]').attr('disabled', true).focus();
          $('textarea[name="cache_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cache_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio15 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="wallpaper_notes"]').attr('disabled', true).focus();
          $('textarea[name="wallpaper_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="wallpaper_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio16 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="wallpaper_fix"]').attr('disabled', true).focus();
          $('textarea[name="wallpaper_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="wallpaper_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio17 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="screen_saver_notes"]').attr('disabled', true).focus();
          $('textarea[name="screen_saver_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="screen_saver_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio18 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="screen_saver_fix"]').attr('disabled', true).focus();
          $('textarea[name="screen_saver_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="screen_saver_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio19 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="password_notes"]').attr('disabled', true).focus();
          $('textarea[name="password_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="password_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio20 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="password_fix"]').attr('disabled', true).focus();
          $('textarea[name="password_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="password_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio21 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="printer_notes"]').attr('disabled', true).focus();
          $('textarea[name="printer_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="printer_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio22 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="printer_fix"]').attr('disabled', true).focus();
          $('textarea[name="printer_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="printer_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio23 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="scanner_notes"]').attr('disabled', true).focus();
          $('textarea[name="scanner_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="scanner_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio24 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="scanner_fix"]').attr('disabled', true).focus();
          $('textarea[name="scanner_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="scanner_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio25 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cctv_notes"]').attr('disabled', true).focus();
          $('textarea[name="cctv_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cctv_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio26 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="cctv_fix"]').attr('disabled', true).focus();
          $('textarea[name="cctv_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="cctv_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio27 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="telephone_notes"]').attr('disabled', true).focus();
          $('textarea[name="telephone_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="telephone_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio28 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="telephone_fix"]').attr('disabled', true).focus();
          $('textarea[name="telephone_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="telephone_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio29 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="fingerprint_notes"]').attr('disabled', true).focus();
          $('textarea[name="fingerprint_notes"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="fingerprint_notes"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
(function($) {
  $.fn.uncheckableRadio30 = function() {
    var $root = this;
    $root.each(function() {
      var $radio = $(this);
      if ($radio.prop('checked')) {
        $radio.data('checked', true);
      } else {
        $radio.data('checked', false);
      }
        
      $radio.click(function() {
        var $this = $(this);
        if ($this.data('checked')) {
          $this.prop('checked', false);
          $this.data('checked', false);
          $this.trigger('change');
          $('textarea[name="fingerprint_fix"]').attr('disabled', true).focus();
          $('textarea[name="fingerprint_fix"]').val('');
        } else {
          $this.data('checked', true);
          $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
          $('textarea[name="fingerprint_fix"]').attr('disabled', false).focus();
        }
      });
    });
    return $root;
  };
}(jQuery));
$('[name=cpu]').uncheckableRadio();
$('[name=cpu_maintenance]').uncheckableRadio2();
$('[name=monitor]').uncheckableRadio3();
$('[name=monitor_maintenance]').uncheckableRadio4();
$('[name=keyboard]').uncheckableRadio5();
$('[name=keyboard_maintenance]').uncheckableRadio6();
$('[name=mouse]').uncheckableRadio7();
$('[name=mouse_maintenance]').uncheckableRadio8();
$('[name=windows]').uncheckableRadio9();
$('[name=windows_maintenance]').uncheckableRadio10();
$('[name=antivirus]').uncheckableRadio11();
$('[name=antivirus_maintenance]').uncheckableRadio12();
$('[name=cache]').uncheckableRadio13();
$('[name=cache_maintenance]').uncheckableRadio14();
$('[name=wallpaper]').uncheckableRadio15();
$('[name=wallpaper_maintenance]').uncheckableRadio16();
$('[name=screen_saver]').uncheckableRadio17();
$('[name=screen_saver_maintenance]').uncheckableRadio18();
$('[name=password]').uncheckableRadio19();
$('[name=password_maintenance]').uncheckableRadio20();
$('[name=printer]').uncheckableRadio21();
$('[name=printer_maintenance]').uncheckableRadio22();
$('[name=scanner]').uncheckableRadio23();
$('[name=scanner_maintenance]').uncheckableRadio24();
$('[name=cctv').uncheckableRadio25();
$('[name=cctv_maintenance]').uncheckableRadio26();
$('[name=telephone]').uncheckableRadio27();
$('[name=telephone_maintenance]').uncheckableRadio28();
$('[name=fingerprint]').uncheckableRadio29();
$('[name=fingerprint_maintenance]').uncheckableRadio30();