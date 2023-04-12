<?php

namespace Drupal\ca_custom_block_react_timer\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides custom block to load a React timer app.
 *
 * @Block(
 *   id = "ca_custom_block_react_timer_example",
 *   admin_label = @Translation("React Timer Block"),
 *   category = @Translation("CA Custom Block React Timer")
 * )
 */
class ReactTimerBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => '<div id="ca-react-timer"></div>',
      '#attached' => [
        'library' => [
          'ca_custom_block_react_timer/ca_custom_block_react_timer'
        ]
      ],
    ];
    return $build;
  }

}
