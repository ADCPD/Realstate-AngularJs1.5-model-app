<?php

namespace CMS\InterfaceBundle\Controller;

use CMS\EventBundle\Entity\Event;
use CMS\EventBundle\Entity\EventTranslation;
use CMS\EventBundle\Manager\EventManager;
use CMS\HabitationBundle\Entity\Habitation;
use CMS\HabitationBundle\Entity\HabitationMedia;
use CMS\HabitationBundle\Entity\HabitationTranslation;
use CMS\HabitationBundle\Manager\HabitationManager;
use CMS\SeoBundle\Manager\SeoManager;
use Doctrine\Common\Util\Debug;
use Symfony\Bundle\DebugBundle\DebugBundle;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ListingPropertiesController
 * @package CMS\InterfaceBundle\Controller
 */
class RealstateAppController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexRealstateAction()
    {
        /**
         * @var Request $request
         * Recuperer la valeur de locale dans l'URL
         */
        $request = $this->getRequest();
        $_locale = $request->getLocale();

        /** @var SeoManager $seoManager */
        $seoManager = $this->container->get('cms_seo.manager.seo_manager');
        $metas = $seoManager->getAllByLocale($_locale);


        return $this->render('@Interface/realstate/ads.html.twig', array(
            'locale' => $_locale,
            'metas' => $metas,
        ));
    }

    /**
     * @return JsonResponse
     */
    public function jsonListingPropertiesAction()
    {

        /**
         * @var Request $request
         * Recuperer la valeur de locale dans l'URL
         */
        $request = $this->getRequest();
        $locale = $request->getLocale();

        /** @var HabitationManager $manager */
        $manager = $this->get('cms_habitation.manager.habitation_manager');

        $proprities = $manager->getAllHabitationByLocale($locale);

        /** @var array $formatted */
        $formatted = array();
        /** @var Habitation $proprity */
        foreach ($proprities as $proprity) {

            /** @var HabitationTranslation $translation */
            foreach ($proprity->getTranslations() as $translation) {

                /** @var HabitationMedia $image */
                foreach ($proprity->getImages() as $image) {

                    $formatted[] = array(
                        'id' => $proprity->getId(),
                        'reference' => $proprity->getReference(),
                        'locale' => $translation->getLocale(),
                        'createAt' => $proprity->getDateCreation()->format('d/m/Y'),
                        'title' => $translation->getTitle(),
                        'description' => $translation->getDescription(),
                        'content' => $translation->getContent(),
                        'price' => $translation->getPrice(),
                        'rentOrSale' => $translation->getRentOrSale(),
                        'images' => $image->getWebPath(),
                        'bedroom' => $proprity->getBedroom(),
                        'bathroom' => $proprity->getBathroom(),
                        'services' => array(
                            'gardian' => $proprity->getServices()->isHasGuardian(),
                            'elevator' => $proprity->getServices()->isHasElevator(),
                            'parking' => $proprity->getServices()->isHasGarage()
                        )
                    );

                }
            }
        }

        $resultat = $formatted;


        return new JsonResponse($resultat);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexEventsAction()
    {
        /**
         * @var Request $request
         * Recuperer la valeur de locale dans l'URL
         */
        $request = $this->getRequest();
        $_locale = $request->getLocale();

        /** @var SeoManager $seoManager */
        $seoManager = $this->container->get('cms_seo.manager.seo_manager');
        $metas = $seoManager->getAllByLocale($_locale);


        return $this->render('@Interface/realstate/listing-events.html.twig', array(
            'locale' => $_locale,
            'metas' => $metas,
        ));
    }


    /**
     * @return JsonResponse
     */
    public function jsonListingEventsAction()
    {

        /**
         * @var Request $request
         * Recuperer la valeur de locale dans l'URL
         */
        $request = $this->getRequest();
        $locale = $request->getLocale();

        /** @var EventManager $manager */
        $manager = $this->get('cms_event.manager.event_manager');

        $events = $manager->getAllEventsByLocale($locale);

        /** @var array $formatted */
        $formatted = array();

        /** @var Event $item */
        foreach ($events as $item) {


            /** @var EventTranslation $translation */
            foreach ($item->getEventTranslations() as $translation) {

                $formatted[] = array(
                    'id' => $item->getId(),
                    'locale' => $translation->getLocale(),
                    'title' => $translation->getTitle(),
                    'description' => $translation->getDescription(),
                    'content' => $translation->getContent(),
                    'price' => $translation->getPrice(),
                    'images' => $item->getWebPath(),
                    'adresse' => $item->getAdresse(),
                    'dateDebut' => $translation->getDateDebut(),
                    'dateFin' => $translation->getDateFin(),
                    'duree' => $translation->getDuree(),
                    'reservation' => $translation->getReservation(),
                    'active' => $translation->getIsActive(),
                    'createDate' => $translation->getDateCreation(),
                    'updateDate' => $translation->getDateDerniereMAJ()
                );

            }
        }

        $resultat = $formatted;

        return new JsonResponse($resultat);
    }

}